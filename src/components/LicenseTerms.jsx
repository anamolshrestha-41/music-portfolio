import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const LicenseTerms = () => {
  const terms = [
    {
      title: "Free License Terms",
      content: [
        "Personal use only - no commercial applications",
        "Attribution required in all uses",
        "Cannot be resold or redistributed",
        "No modifications without permission",
        "Valid for 1 year from download"
      ]
    },
    {
      title: "Commercial License Terms", 
      content: [
        "Commercial use permitted including monetization",
        "Valid for unlimited projects",
        "Attribution appreciated but not required",
        "Minor modifications allowed",
        "Lifetime license with no expiration"
      ]
    },
    {
      title: "Exclusive License Terms",
      content: [
        "Exclusive rights - track removed from public sale",
        "Full commercial rights including sync licensing",
        "Modifications and remixes permitted",
        "Stems and project files included",
        "Direct artist collaboration available"
      ]
    }
  ]

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      variants={slideUp}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        📋 License Terms & Conditions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {terms.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.content.map((item, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Payment & Delivery
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Payment Methods</h4>
            <ul className="space-y-1">
              <li>• Credit/Debit Cards via Gumroad</li>
              <li>• PayPal</li>
              <li>• Bank Transfer (Exclusive licenses)</li>
              <li>• Cryptocurrency (on request)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Delivery</h4>
            <ul className="space-y-1">
              <li>• Instant download after payment</li>
              <li>• High-quality WAV/MP3 files</li>
              <li>• License certificate included</li>
              <li>• Email support within 24 hours</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
          Questions about licensing? Contact me at{' '}
          <a href="mailto:your-email@example.com" className="text-purple-600 hover:underline">
            your-email@example.com
          </a>{' '}
          or use the contact form below.
        </p>
      </div>
    </motion.div>
  )
}

export default LicenseTerms