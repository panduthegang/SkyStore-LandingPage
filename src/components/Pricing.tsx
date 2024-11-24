import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    features: [
      '10 GB Storage',
      'Basic File Sharing',
      '2 GB Upload Size',
      'Email Support',
      'Mobile Access'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Pro',
    price: '499',
    features: [
      '500 GB Storage',
      'Advanced File Sharing',
      '10 GB Upload Size',
      'Priority Support',
      'Team Collaboration',
      'Version History',
      'Custom Branding'
    ],
    popular: true,
    cta: 'Try Pro'
  },
  {
    name: 'Enterprise',
    price: '1,999',
    features: [
      'Unlimited Storage',
      'Enterprise Security',
      'Unlimited Upload Size',
      '24/7 Support',
      'Admin Controls',
      'API Access',
      'Custom Integration',
      'SLA Guarantee'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[#FA7275] mb-4"
          >
            Choose Your Plan
          </motion.h2>
          <p className="text-xl text-gray-600">
            Flexible plans for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl bg-white p-8 shadow-lg ${
                plan.popular ? 'ring-2 ring-[#FA7275]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FA7275] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-gray-500">₹</span>
                  <span className="text-4xl font-bold mx-1">{plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-[#FA7275] mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-[#FA7275] text-white hover:bg-[#f85d60]'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 text-gray-600"
        >
          All plans include 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}