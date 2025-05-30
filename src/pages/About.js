import React from 'react';

const About = () => {
  return (
    <div className="main-content">
      <h2>👤 About Me</h2>
      <p>I'm a Machine Learning Engineer with a Master's degree in Data Science from SUNY University at Buffalo and 3+ years of industry experience. My expertise lies in ML/AI, Data Science, MLOps, and software engineering for ML products.</p>

      <p>I have experience handling everything from brainstorming to deploying ML projects, including ideation, research, model development, and maintenance. I'm skilled in developing scalable applications, ML inference solutions, building RESTful APIs, and deploying cloud-based ML models (AWS, GCP) in production.</p>

      <p>My current research interests lie in Applied ML, Language Modeling, and training optimization techniques, especially in the domain of unstructured text. I'm passionate about exploring and contributing to the intersection of ML and software engineering.</p>

      <p>Apart from work, I enjoy playing music, video games, and traveling. Always looking forward to connect with folks from the field of Data Science, Machine Learning and AI community.</p>

      <h2>🎓 Education</h2>
      <ul>
        <li><strong>Master's in Data Science</strong>, SUNY University at Buffalo (Class of 2023)</li>
        <li><strong>Bachelor's in Computer Engineering</strong>, PICT University of Pune (Class of 2018)</li>
      </ul>

      <h2>🛠️ Technical Skills</h2>
      <ul>
        <li>
          <strong>Languages</strong>
          <ul>
            <li>Expert: Python</li>
            <li>Intermediate: C++</li>
            <li>Basic: Java/J2EE, C, Golang, Jax, R</li>
          </ul>
        </li>
        <li><strong>LLM Toolkit</strong>: LangChain, LlamaIndex, GuardRails, Steamship, Weaviate, FAISS, HuggingFace, TensorRT, ONNX, Vertex AI</li>
        <li><strong>Libraries/Frameworks</strong>: Dask, RAPIDS, Keras, PyTorch, TensorFlow 1.x, Flair, Fastai 2, NLTK, Spacy, PyTorch Lightning, Celery, Onnx, OpenVINO, Jupyter notebooks</li>
        <li><strong>Data Visualization</strong>: Tableau, PowerBI, d3.js, seaborn, matplotlib</li>
        <li><strong>Version Control</strong>: Git, SVN, Bitbucket</li>
        <li><strong>CI/CD</strong>: GitlabCI, Jenkins, CircleCI, GitHub Actions, Docker</li>
        <li><strong>Databases</strong>: SQL, Redis, MongoDB, Spark, Arrow, BigQuery</li>
        <li><strong>Cloud</strong>: AWS, GCP</li>
        <li><strong>Web Development</strong>: HTML/CSS, Django, Flask, FastAPI, Streamlit, Gradio</li>
      </ul>

      <h2>💼 Work Experience</h2>
      <ul>
        <li><strong>ML/AI Software Engineer</strong>, Lean Innovation Labs : October 2024 - Present</li>
        <li><strong>Machine Learning Engineer</strong>, Tellagence : June 2023 - October 2024</li>
        <li><strong>Software Engineer in Machine Learning</strong>, Rubiscape : January 2019 - June 2021</li>
        <li><strong>Machine Learning Intern</strong>, Walnut App : August 2017 - November 2018</li>
      </ul>

      <h2>📚 Publications</h2>
      <ul>
        <li>
          <strong>TeamWellX: Leveraging Genetic Algorithms to Optimize Roster Strategy</strong> 
          <a href="https://www.sciencedirect.com/science/article/pii/S2352711024000062">📄 View Paper</a>
          <p style={{ marginTop: 0 }}>Published a technical paper in Elsevier SoftwareX on using genetic algorithms and machine learning to optimize team rosters, enhancing solution diversity and robustness using mutations for adaptive strategy optimization.</p>
        </li>
      </ul>

      <h2>🤝 Volunteer Experience</h2>
      <ul>
        <li>🤖 Core-team member and Tech Lead at Google Developer Student Club chapter at SUNY University at Buffalo for 2022</li>
        <li>🧑‍🏫 Mentored multiple student groups for undergrad research projects in Applied ML</li>
        <li>🎤 Conducted 40+ sessions as a Machine Learning facilitator at Academic Faculty Development Programs for teaching faculty at engineering colleges under Government of India, MHRD initiative</li>
        <li>🌍 Student ambassador to Huggingface at SUNY Buffalo University to volunteer with the community in their ML democratization efforts (June 2022 - December 2022)</li>
      </ul>
    </div>
  );
};

export default About; 