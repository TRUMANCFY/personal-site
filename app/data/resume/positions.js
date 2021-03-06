
const positions = [
  {
    company: 'Credit Suisse',
    city: 'Lausanne',
    country: 'Switzerland',
    position: 'Data Science Intern',
    link: '',
    daterange: 'March 2020 - August 2020',
    points: [
      'Worked with Global Information Barrier Surveillance team',
      'Embedded the news and relative semetiment into the monitoring pipeline',
      'Optimized the pipeline, including converting the snapshot dataframe into incremental data',
      'Rewrote the data writing on the platform, and added the functionality of repartitioning in order to avoid I/O bottleneck',
      'Worked with Business team to provide supportive analysis'
    ],
  },
  {
    company: 'AXA Technology Services Advanced Engineering Lab',
    city: 'Lausanne',
    country: 'Switzerland',
    position: 'NLP R&D Intern',
    link: 'https://axa.com',
    daterange: 'July 2019 - August 2019',
    points: [
      'Aimed to build up an autonomous system to help tag the label for the task of name entity recognition for insurance contract, classified the sentences in the document and tried to match them with the most similar template',
      'Converted PDF to markdown to get the structural information of the document by implementing API for the tool pdf-to-markdown',
      'Took 1,200 English contract markdown files as training data, trained a BERT model to classify sentences, e.g. general exclusion',
      'Took advantage of InferSent for sentence embedding, calculated cosine similarity to find the most similar template in the collection',
      'Built up the user interface with the framework Vue.js, including the document uploading, document preview, and similarity threshold setting',
      'Set up the pipeline service by combining frontend (express), backend (flask), and PDF parser'
    ],
  }, {
    company: 'MokaHR',
    city: 'Beijing',
    country: 'China',
    position: 'NLP R&D Intern',
    link: 'https://www.mokahr.com/',
    daterange: 'June 2018 - August 2018',
    points: [
      'Aimed to extract the meaningful information such as name, age, gender, and experience in a raw text, which was generated by a text extractor for different types of documents (PDF, doc, etc.)',
      'Trained a GRU model with character-frequency as feature input as a text splitter, which can slice the full text to different types of parts, including basic information, educational experience and working experience',
      'Extracted the basic features like name from the divided part of basic information with the general idea of Named Entity Recognition (NER) using both traditional methods (like regular expression) and deep learning model',
      'Trained a bidirectional GRU-CRF model, with training data labeled texts from the results of three third-party service suppliers',
      'Designed algorithms to combine the results from traditional methods and modern ones',
      'Trained sequential classifiers to select the most possible entity, especially for the unique entity in resume, like name',
      'Launched the service to over 300 clients, and kept the maintenance for another three weeks',
    ],
  },
  {
    company: 'Seedlink Technology',
    city: 'Shanghai',
    country: 'China',
    position: 'NLP R&D Intern',
    link: 'https://www.seedlinktech.com/',
    daterange: 'July 2017 – September 2017',
    points: [
      'Aimed to provide reference about position applicants’ personality to the department of human resource (HR); Set up a model to predict characteristics based on their writing features to specific questions',
      'Built up a Python package based on the rules to extract linguistic features including N-grams and TF-IDF from passage',
      'Developed a C-language extension to plug THU lexical analyzer for Chinese (THULAC) into PostgreSQL to solve the problem of failing to parse Chinese by space in database management system',
      'Applied Principal Component Analysis on features extracted to select top influential ones',
      'Labeled every applicant with the classification given by HR; Built up a multiple-layer fully connected neural network and also random forest separately to model the predictive relationship between applicants’ writing features and HR’s evaluation',
    ],
  },
];

export default positions;
