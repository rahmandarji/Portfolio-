export const CONTACT_LINKS = {
  email: "rahmandarji926@gmail.com",
  github: "https://github.com/rahmandarji",
  linkedin: "https://www.linkedin.com/in/rahman-darji-001164402?utm_source=share_via&utm_content=profile&utm_medium=member_android"
};

export const SIFT_PROJECT = {
  name: "Sift",
  title: "Agentic Research & Decision Intelligence",
  repo: "https://github.com/rahmandarji/sift",
  tech: ["Python", "LangGraph", "LangChain", "Pydantic", "Tavily", "ChromaDB", "Sentence Transformers", "SQLite", "Pytest"],
  description: "A stateful agentic research system that decomposes research questions into decision criteria and prioritized research tasks.",
  tests: "15 passing Pytest tests",
  capabilities: [
    "Stateful LangGraph workflow execution",
    "Research-question decomposition into explicit decision criteria",
    "Prioritized research task queue generation",
    "Tavily-based targeted web search integration",
    "Structured evidence extraction with claim/source deduplication",
    "Evidence verification & conflict detection algorithms",
    "Dynamic evaluation and workflow routing logic",
    "SQLite checkpointing for full execution persistence",
    "Thread-based execution identifiers for isolated sessions",
    "Internal RAG subsystem featuring document loading, chunking, Sentence Transformer embeddings, and ChromaDB retrieval",
    "Comprehensive automated test suite"
  ]
};

export const RAG_PROJECT = {
  name: "RAG Production",
  title: "Closed-World RAG Service",
  repo: "https://github.com/rahmandarji/rag-production",
  tech: ["Python", "FastAPI", "Qdrant", "Sentence Transformers", "PyTorch", "Hugging Face Transformers", "Pytest", "Docker", "GitHub Actions"],
  description: "A closed-world RAG service that uses retrieved user-provided documents as the evidence boundary for answer generation.",
  tests: "122 passing Pytest tests",
  capabilities: [
    "Document ingestion and custom text chunking",
    "BGE embeddings generation",
    "Qdrant vector database retrieval",
    "Cross-encoder reranking stage for high precision",
    "Qwen-based local LLM answer generation",
    "NLI-based grounding verification to enforce evidence bounds",
    "FastAPI production service with Pydantic Settings configuration",
    "Structured JSON logging with unique Request IDs & duration tracking",
    "Health checks, centralized exception handling, and API rate/validation limits",
    "GitHub Actions CI pipeline validating Docker image builds and test coverage"
  ]
};

export const ENGINEERING_STACK = [
  {
    category: "Languages",
    items: ["Python", "SQL"]
  },
  {
    category: "Agentic AI / LLM",
    items: ["LangGraph", "LangChain", "Pydantic", "Hugging Face Transformers", "Qwen", "Tavily"]
  },
  {
    category: "RAG / Retrieval",
    items: ["Qdrant", "ChromaDB", "Sentence Transformers", "BGE Embeddings", "Cross-Encoders", "Reranking", "NLI-based Grounding Verification"]
  },
  {
    category: "ML / Deep Learning",
    items: ["PyTorch", "Torchvision", "Scikit-learn", "XGBoost", "NumPy", "Pandas"]
  },
  {
    category: "Backend / Engineering",
    items: ["FastAPI", "Uvicorn", "Pytest", "Docker", "GitHub Actions", "SQLite", "Git", "GitHub"]
  }
];

export const BUILDING_PROCESS = [
  {
    step: "01",
    title: "Understand",
    description: "Define the problem, specify explicit constraints, and establish validation boundaries."
  },
  {
    step: "02",
    title: "Design",
    description: "Choose optimal data structures, orchestration flow, vector indices, and system boundaries."
  },
  {
    step: "03",
    title: "Build",
    description: "Implement core logic: models, retrieval systems, stateful graphs, APIs, and micro-infrastructure."
  },
  {
    step: "04",
    title: "Test",
    description: "Validate deterministic and non-deterministic behavior through quantitative automated tests."
  },
  {
    step: "05",
    title: "Verify",
    description: "Evaluate retrieval precision, NLI grounding coverage, latency, and failure modes."
  },
  {
    step: "06",
    title: "Deploy",
    description: "Containerize services, build robust CI/CD pipelines, and prepare for production execution."
  }
];
