import React from 'react';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>

      <ol>
        <li>
          <strong>Custom Named-Entity-Recognition using BERT</strong><br />
          <strong>Technologies:</strong> Python, PyTorch, FastAPI<br />
          <a href="https://github.com/sumedhkhodke/Custom-Named-Entity-Recognition">View Project</a>
          <p>Designed and developed a Custom NER model using transfer learning on BERT, acting as a resume parser to extract useful information from resumes based on user-defined fields such as Education, Skills, Experience, Location, Interests, etc. The model achieved an accuracy of <strong>74%</strong> and was served as an application wrapped using FastAPI.</p>
        </li>

        <li>
          <strong>Automatic Speech Recognition using Wav2Vec2 XLSR-53 for Low-Resource Languages</strong><br />
          <strong>Technologies:</strong> Python, PyTorch, HuggingFace<br />
          <a href="https://github.com/sumedhkhodke/xlsr-wav2vec2-asr-marathi">View Project</a>
          <p>Trained the language model of <code>facebook/wav2vec2-large-xlsr-53</code> on Marathi language for ASR by fine-tuning on the Open SLR64 Marathi dataset. Achieved a Word Error Rate (WER) on the test set of <strong>12.70%</strong> with input data sampled at 16kHz. Implemented as part of the HuggingFace XLSR Open-Source Sprint for low-resource languages.</p>
        </li>

        <li>
          <strong>NFL RosterGen: Optimizing NFL Roster Construction using Genetic Algorithms</strong><br />
          <a href="https://github.com/sumedhkhodke/NFL-Team-Construction-1">View Project</a>
          <p>Roster construction and optimization in the NFL to create better team construction strategies using a family of genetic algorithms to objectively select players, coupled with an ML-based fitness function used to evaluate a team's quality.</p>
        </li>

        <li>
          <strong>NLP Playground</strong><br />
          <strong>Technologies:</strong> Python, PyTorch-Lightning, FastAPI, AWS Lambda<br />
          <a href="https://github.com/sumedhkhodke/NLPPlayground">View Project</a>
          <p>Trained and fine-tuned different domain-specific language models of BERT variants for downstream NLP tasks like masked and unmasked text prediction and abstractive text summarization. The solution was deployed on a serverless cloud.</p>
        </li>

        <li>
          <strong>Prediction and Semantic Classification of Myers-Briggs Personality Types from User-Provided Text</strong><br />
          <strong>Technologies:</strong> Python, PyTorch<br />
          <a href="https://github.com/sumedhkhodke/MyersBriggs-Personality-Detection">View Project</a>
          <p>Sponsored final year undergrad research project. Architected a model that predicts personality type according to MBTI based on user-written text input, with a comparative study of classification techniques for word-vector representations and embeddings. Achieved an accuracy score of <strong>78%</strong> on predicted personality types.</p>
        </li>

        <li>
          <strong>Abstractive Text Summarization using Transformers</strong><br />
          <strong>Technologies:</strong> Python, PyTorch<br />
          <a href="https://github.com/sumedhkhodke/Summarization-Ecommerce-Reviews">View Project</a>
          <p>Performed extractive text summarization on Amazon product reviews across multiple categories. Improved the generalization of model performances of BART, T5, and PEGASUS to adapt to out-of-domain text inputs through fine-tuning.</p>
        </li>
      </ol>
    </div>
  );
};

export default Projects; 