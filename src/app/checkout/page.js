'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/services/api';
import toast, { Toaster } from 'react-hot-toast';
import QRCode from 'qrcode.react';

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1); // 1: Details, 2: Crypto, 3: Payment
  const [formData, setFormData] = useState({
    email: '',
    plan_type: searchParams.get('plan') || '1_month',
    amount: searchParams.get('price') || 35
  });
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [availableNetworks, setAvailableNetworks] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [cryptoAddresses, setCryptoAddresses] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const planNames = {
    '1_month': '1 Month Plan',
    '3_months': '3 Months Plan',
    '6_months': '6 Months Plan',
    '1_year': '1 Year Plan',
    'lifetime': 'Lifetime Plan'
  };

  const cryptoOptions = [
    { coin: 'USDC', icon: '/assets/usdc.png', network: 'ERC20' },
    { coin: 'USDT', icon: '/assets/usdt.png', network: 'TRC20' },
    { coin: 'SOL', icon: '/assets/sol.png', network: 'Solana' },
    { coin: 'LTC', icon: '/assets/ltc.png', network: 'Mainnet' },
    { coin: 'BTC', icon: '/assets/btc.png', network: 'Mainnet' },
    { coin: 'ETH', icon: '/assets/eth.png', network: 'Mainnet' }
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    setStep(2);
  };

  const handleCryptoSelect = async (crypto) => {
    setSelectedCrypto(crypto);
    setLoading(true);

    try {
      // First, create order to get available networks for this coin
      const response = await api.createOrder({
        user_email: formData.email,
        plan_type: formData.plan_type,
        amount: parseFloat(formData.amount),
        coin: crypto.coin
      });

      if (response.success) {
        setOrderId(response.order.order_id);
        setCryptoAddresses(response.crypto_addresses);

        // If multiple networks available, show network selection (step 2.5)
        if (response.crypto_addresses.length > 1) {
          setAvailableNetworks(response.crypto_addresses);
          setStep(2.5); // Network selection step
        } else {
          // Only one network, go directly to payment
          setStep(3);
        }

        toast.success('Order created successfully!');
      } else {
        toast.error(response.error || 'Failed to create order');
      }
    } catch (error) {
      toast.error('Failed to create order. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNetworkSelect = (network) => {
    setSelectedNetwork(network);
    // Filter crypto addresses to only show the selected network
    const filteredAddresses = cryptoAddresses.filter(addr => addr.network === network);
    setCryptoAddresses(filteredAddresses);
    setStep(3);
  };

  const handleTxidSubmit = async (e) => {
    e.preventDefault();
    const txid = e.target.txid.value;

    if (!txid || txid.length < 10) {
      toast.error('Please enter a valid transaction ID');
      return;
    }

    setLoading(true);

    try {
      const response = await api.submitTxid(orderId, txid);

      if (response.success) {
        toast.success('Transaction ID submitted! Redirecting...');
        setTimeout(() => {
          router.push(`/order/${orderId}`);
        }, 1500);
      } else {
        toast.error(response.error || 'Failed to submit transaction ID');
      }
    } catch (error) {
      toast.error('Failed to submit transaction ID');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Complete Your Purchase</span>
          </h1>
          <p className="text-gray-600">Secure cryptocurrency payment</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className={`flex items-center ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'gradient-bg text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <span className="ml-2 font-semibold">Details</span>
          </div>
          <div className={`w-16 h-1 mx-4 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'gradient-bg text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <span className="ml-2 font-semibold">Crypto</span>
          </div>
          <div className={`w-16 h-1 mx-4 ${step >= 3 ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center ${step >= 3 ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'gradient-bg text-white' : 'bg-gray-200'}`}>
              3
            </div>
            <span className="ml-2 font-semibold">Payment</span>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Email & Details */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Order Details</h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Plan:</span>
                  <span className="font-bold text-lg">{planNames[formData.plan_type]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-bold text-2xl gradient-text">${formData.amount}</span>
                </div>
              </div>

              <form onSubmit={handleEmailSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Your license key will be sent to this email
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full gradient-bg text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all"
                >
                  Continue to Payment
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Select Cryptocurrency */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Cryptocurrency</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {cryptoOptions.map((crypto) => (
                  <button
                    key={crypto.coin}
                    onClick={() => handleCryptoSelect(crypto)}
                    disabled={loading}
                    className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all text-center disabled:opacity-50"
                  >
                    <img src={crypto.icon} alt={crypto.coin} className="w-16 h-16 mx-auto mb-2" />
                    <div className="font-bold text-lg">{crypto.coin}</div>
                  </button>
                ))}
              </div>

              {loading && (
                <div className="text-center mt-6">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                  <p className="text-gray-600 mt-2">Creating order...</p>
                </div>
              )}

              <button
                onClick={() => setStep(1)}
                className="w-full mt-6 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Back
              </button>
            </div>
          )}

          {/* Step 2.5: Select Network (if multiple networks available) */}
          {step === 2.5 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Network for {selectedCrypto?.coin}</h2>
              <p className="text-gray-600 mb-6">This cryptocurrency is available on multiple networks. Please select your preferred network:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableNetworks.map((networkAddr) => (
                  <button
                    key={networkAddr.network}
                    onClick={() => handleNetworkSelect(networkAddr.network)}
                    className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all text-left"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <img src={selectedCrypto?.icon} alt={selectedCrypto?.coin} className="w-12 h-12" />
                      <div className="font-bold text-lg gradient-text">{networkAddr.network}</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Network: {networkAddr.network}</div>
                    <div className="text-xs text-gray-500 font-mono break-all">{networkAddr.address.substring(0, 30)}...</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full mt-6 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Back
              </button>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && cryptoAddresses.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Payment</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Order ID:</strong> {orderId}
                </p>
              </div>

              {cryptoAddresses.map((addr, index) => (
                <div key={index} className="mb-6 p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={cryptoOptions.find(c => c.coin === addr.coin)?.icon}
                        alt={addr.coin}
                        className="w-12 h-12"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{addr.coin}</h3>
                        <p className="text-sm text-gray-600">{addr.network} Network</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">${formData.amount}</div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <QRCode value={addr.address} size={150} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">Send exactly ${formData.amount} {addr.coin} to:</p>
                      <div className="bg-white p-3 rounded-lg border border-gray-200 break-all font-mono text-sm">
                        {addr.address}
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(addr.address);
                          toast.success('Address copied!');
                        }}
                        className="mt-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                      >
                        📋 Copy Address
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <form onSubmit={handleTxidSubmit} className="mt-8">
                <label className="block text-gray-700 font-semibold mb-2">
                  Transaction ID (TXID)
                </label>
                <input
                  type="text"
                  name="txid"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none mb-4"
                  placeholder="Enter your transaction ID after payment"
                  required
                />
                <p className="text-sm text-gray-500 mb-4">
                  After sending the payment, paste your transaction ID here. Our team will verify and send your license key.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full gradient-bg text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Transaction ID'}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
