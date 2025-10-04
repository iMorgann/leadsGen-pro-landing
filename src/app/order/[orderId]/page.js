'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import api from '@/services/api';
import toast, { Toaster } from 'react-hot-toast';

export default function OrderStatusPage() {
  const params = useParams();
  const orderId = params.orderId;

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [polling, setPolling] = useState(true);

  useEffect(() => {
    fetchOrderStatus();

    // Poll every 10 seconds if order is pending
    const interval = setInterval(() => {
      if (polling) {
        fetchOrderStatus();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [orderId, polling]);

  const fetchOrderStatus = async () => {
    try {
      const response = await api.getOrderStatus(orderId);
      if (response.success) {
        setOrder(response.order);

        // Stop polling if order is confirmed or rejected
        if (response.order.status === 'confirmed' || response.order.status === 'rejected') {
          setPolling(false);
        }
      } else {
        toast.error('Order not found');
      }
    } catch (error) {
      console.error('Error fetching order status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const blob = await api.downloadLicense(orderId);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `LeadsGenPro-License-${order.license_key}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success('License downloaded!');
    } catch (error) {
      toast.error('Failed to download license');
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mb-4"></div>
          <p className="text-gray-600">Loading order...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold mb-2">Order Not Found</h1>
          <p className="text-gray-600 mb-6">The order ID you provided is invalid</p>
          <a href="/" className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold">
            Go to Home
          </a>
        </div>
      </div>
    );
  }

  const statusConfig = {
    pending: {
      icon: '⏳',
      title: 'Waiting for Payment',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    txid_submitted: {
      icon: '🔍',
      title: 'Payment Under Review',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    confirmed: {
      icon: '✅',
      title: 'Payment Confirmed!',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    rejected: {
      icon: '❌',
      title: 'Payment Rejected',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }
  };

  const status = statusConfig[order.status] || statusConfig.pending;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Order Status</span>
          </h1>
          <p className="text-gray-600">Order ID: {orderId}</p>
        </div>

        {/* Status Card */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 ${status.borderColor}`}>
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{status.icon}</div>
            <h2 className={`text-3xl font-bold mb-2 ${status.color}`}>{status.title}</h2>

            {order.status === 'pending' && (
              <p className="text-gray-600">Please complete the payment to proceed</p>
            )}

            {order.status === 'txid_submitted' && (
              <div>
                <p className="text-gray-600 mb-4">
                  Our team is verifying your payment. This usually takes 5-30 minutes.
                </p>
                <div className="inline-flex items-center text-sm text-gray-500">
                  <div className="animate-pulse mr-2">🔄</div>
                  Checking status every 10 seconds...
                </div>
              </div>
            )}

            {order.status === 'confirmed' && (
              <p className="text-gray-600">Your license is ready! Check your email or download below.</p>
            )}

            {order.status === 'rejected' && (
              <p className="text-gray-600">
                {order.rejection_reason || 'Payment could not be verified. Please contact support.'}
              </p>
            )}
          </div>

          {/* Order Details */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Plan:</span>
              <span className="font-bold">{order.plan_type.replace('_', ' ')}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Amount:</span>
              <span className="font-bold text-lg">${order.amount}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Cryptocurrency:</span>
              <span className="font-bold">{order.coin}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Email:</span>
              <span className="font-mono text-sm">{order.user_email}</span>
            </div>
            {order.txid && (
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Transaction ID:</span>
                <div className="flex items-center">
                  <span className="font-mono text-sm mr-2">{order.txid.substring(0, 16)}...</span>
                  <button
                    onClick={() => copyToClipboard(order.txid)}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    📋
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* License Key (if confirmed) */}
          {order.status === 'confirmed' && order.license_key && (
            <div className="bg-gradient-to-r from-primary-500 to-secondary-600 rounded-xl p-6 text-white mb-6">
              <h3 className="text-xl font-bold mb-4">Your License Key</h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                <p className="font-mono text-2xl text-center break-all">{order.license_key}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => copyToClipboard(order.license_key)}
                  className="flex-1 bg-white text-primary-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all"
                >
                  📋 Copy License Key
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg font-bold hover:bg-white/30 transition-all"
                >
                  💾 Download as File
                </button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="space-y-3">
            {order.status === 'confirmed' && (
              <a
                href="#download"
                className="block w-full gradient-bg text-white py-4 rounded-lg font-bold text-center hover:opacity-90 transition-all"
              >
                Download LeadsGen Pro
              </a>
            )}

            {(order.status === 'rejected' || order.status === 'pending') && (
              <a
                href="https://t.me/rootbck"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full gradient-bg text-white py-4 rounded-lg font-bold text-center hover:opacity-90 transition-all"
              >
                Contact Support on Telegram
              </a>
            )}

            <a
              href="/"
              className="block w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold text-center hover:bg-gray-200 transition-all"
            >
              Back to Home
            </a>
          </div>
        </div>

        {/* Download Section (if confirmed) */}
        {order.status === 'confirmed' && (
          <div id="download" className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Download LeadsGen Pro</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://leadsgen-pro.shop/download/LeadsGenPro-Setup.exe"
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-2">💻</div>
                <div className="font-bold">Windows</div>
                <div className="text-sm text-gray-500">Setup.exe</div>
              </a>
              <a
                href="https://leadsgen-pro.shop/download/LeadsGenPro-Mac.dmg"
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-2">🍎</div>
                <div className="font-bold">macOS</div>
                <div className="text-sm text-gray-500">.dmg</div>
              </a>
              <a
                href="https://leadsgen-pro.shop/download/LeadsGenPro-Linux.AppImage"
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-2">🐧</div>
                <div className="font-bold">Linux</div>
                <div className="text-sm text-gray-500">.AppImage</div>
              </a>
            </div>
          </div>
        )}

        {/* Help */}
        <div className="text-center mt-8 text-gray-600">
          <p>Need help? Contact us at <a href="mailto:support@leadsgen-pro.shop" className="text-primary-600 hover:underline">support@leadsgen-pro.shop</a></p>
          <p className="mt-2">or Telegram: <a href="https://t.me/rootbck" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">@rootbck</a></p>
        </div>
      </div>
    </div>
  );
}
