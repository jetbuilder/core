export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an alternative to Azure OpenAI for on-premises deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JetBuilder Studio is a complete alternative to Azure OpenAI that deploys entirely on your infrastructure. Unlike Azure OpenAI which requires cloud connectivity and ongoing API fees, JetBuilder Studio allows you to train and deploy Small Language Models (SLMs) on your own servers with complete data sovereignty and zero cloud dependency."
        }
      },
      {
        "@type": "Question",
        "name": "Can I run AI models without AWS Bedrock or Google Vertex AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. JetBuilder Studio provides a visual IDE for building AI agentic workflows that run entirely on your infrastructure without any dependency on AWS Bedrock, Google Vertex AI, or other cloud AI services. You can train custom Small Language Models on your data and deploy them on-premises with complete control."
        }
      },
      {
        "@type": "Question",
        "name": "What are Small Language Models (SLMs) and why are they better than large cloud LLMs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Small Language Models (SLMs) are 7B-13B parameter models that can be trained on your specific data and deployed on your infrastructure. For enterprise workflows, SLMs often outperform generic large models like GPT-4 because they're domain-specific, have faster inference, lower costs (no per-token fees), complete data sovereignty, and work in air-gapped environments."
        }
      },
      {
        "@type": "Question",
        "name": "How much does on-premises AI deployment cost compared to cloud APIs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On-premises deployment with JetBuilder Studio has a one-time cost versus ongoing per-token API fees with cloud services. For high-volume applications, organizations typically see 10x-100x cost savings after the first year. There are no rate limits, no vendor lock-in, and no ongoing cloud compute charges."
        }
      },
      {
        "@type": "Question",
        "name": "Is JetBuilder Studio HIPAA and FedRAMP compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JetBuilder Studio is designed to support HIPAA, FedRAMP, PIPEDA, and FIPS 140-2 compliance requirements. Because it deploys entirely on your infrastructure, you maintain complete control over data, encryption, and compliance. The platform includes audit logging, air-gap capability, and works in classified environments."
        }
      },
      {
        "@type": "Question",
        "name": "Can I train AI models on my proprietary data without sending it to the cloud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. JetBuilder Studio allows you to train custom Small Language Models entirely on your infrastructure using your proprietary data. Nothing is sent to Azure, AWS, Google, or any external service. This is perfect for financial services, healthcare, government, and other regulated industries requiring complete data sovereignty."
        }
      },
      {
        "@type": "Question",
        "name": "What is an agentic AI workflow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agentic AI workflows are systems where autonomous AI agents work together to complete complex tasks. JetBuilder Studio provides a visual IDE with 49+ pre-built components to build multi-agent systems that can process documents, voice, video, and business data autonomously with human-in-the-loop oversight."
        }
      },
      {
        "@type": "Question",
        "name": "How do I migrate from Azure OpenAI to on-premises AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JetBuilder Studio provides migration tools and support to move from Azure OpenAI, AWS Bedrock, or Google Vertex AI to on-premises deployment. Our team helps with model training on your data, workflow migration, and deployment on your infrastructure. Most organizations complete migration in 2-4 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Does on-premises AI work in air-gapped environments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. JetBuilder Studio is designed for air-gapped deployment with zero external connectivity requirements. Perfect for government classified systems, defense, intelligence operations, and critical infrastructure. All AI inference, training, and workflow execution happens entirely within your isolated network."
        }
      },
      {
        "@type": "Question",
        "name": "What industries benefit most from on-premises AI deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industries with strict data sovereignty requirements benefit most: financial services (banking, insurance), healthcare (HIPAA), government & defense (FedRAMP, classified), legal (attorney-client privilege), manufacturing (proprietary processes), and telecommunications (customer data). Any organization that cannot send data to Azure, AWS, or Google."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

