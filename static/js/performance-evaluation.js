function detectionModels() {
  return {
    models: [
      {
        id: 1,
        name: "XLSR-AASIST",
        description: "XLS-R embeddings for cross-lingual speech representation, post-processed by AASIST spatio-temporal attention",
        paperUrl: "https://doi.org/10.21437/Odyssey.2022-16",
        preprintUrl: "https://arxiv.org/abs/2202.12233",
        githubUrl: "https://github.com/TakHemlata/SSL_Anti-spoofing/tree/4acaa61dcef5f7610f43aa4d0b29c4559b970cd2",
      },
      {
        id: 2,
        name: "XLSR-SLS",
        description: "XLS-R embeddings for cross-lingual speech representation, post-processed by sensitive layer selection (SLS)",
        paperUrl: "https://doi.org/10.1145/3664647.3681345",
        preprintUrl: "https://openreview.net/forum?id=acJMIXJg2u&noteId=acJMIXJg2u",
        githubUrl: "https://github.com/QiShanZhang/SLSforASVspoof-2021-DF/tree/89a09ac4404c5687d96d6c123fcf6db20e4e4b38",
      },
      {
        id: 3,
        name: "XLSR-Mamba",
        description: "XLS-R embeddings for cross-lingual speech representation, post-processed by a bi-directional Mamba space state model",
        paperUrl: "https://doi.org/10.1109/LSP.2025.3547861",
        preprintUrl: "https://arxiv.org/pdf/2411.10027",
        githubUrl: "https://github.com/swagshaw/XLSR-Mamba/tree/a8a613656a94415dc79e4f4a4efac585bce0890d",
      },
    ],
  };
}



// use null on infoUrl or githubUrl if they are not available
function audioEncoders() {
  return {
    models: [
      {
        id: 1,
        name: "EnCodec",
        description: "Neural Codec for audio compression by FacebookResearch",
        infoUrl: "https://ai.honu.io/papers/encodec/samples.html",
        githubUrl: "https://github.com/facebookresearch/encodec/tree/v0.1.1",
      },
      {
        id: 2,
        name: "Lyra-V2",
        description: "Neural Codec for audio compression by Google",
        infoUrl: "https://opensource.googleblog.com/2022/09/lyra-v2-a-better-faster-and-more-versatile-speech-codec.html",
        githubUrl: "https://github.com/google/lyra/tree/v1.3.2",
      },
      {
        id: 3,
        name: "Descript Audio Codec",
        description: "Neural Codec for audio compression by Descript Inc",
        infoUrl: "https://descript.notion.site/Descript-Audio-Codec-11389fce0ce2419891d6591a68f814d5", 
        githubUrl: "https://github.com/descriptinc/descript-audio-codec/tree/1.0.0",
      },
      {
        id: 4,
        name: "L3AC",
        description: "Neural Codec for speech compression by Xi’an Jiaotong University",
        // infoUrl: "https://arxiv.org/abs/2504.04949",
        githubUrl: "https://github.com/zhai-lw/L3AC/tree/1cb03f5e037c9ecdfc15bbaf3046f67d9a77c347",
      },
      {
        id: 5,
        name: "Speech Tokenizer",
        description: "Neural Codec for speech compression by Fudan University",
        infoUrl: "https://0nutation.github.io/SpeechTokenizer.github.io/",
        githubUrl: "https://github.com/ZhangXInFD/SpeechTokenizer/tree/30c96fb32a9fc06a2258c98119e237def051e46c",
      },
    ],
  };
}


const balancedAccuracyData = [
  {
    model: "XLSR-AASIST",
    values: {
      Original: 100,
      Encodec: 50,
      "Lyra-V2": 51,
      "Descript Audio Codec": 97,
      L3AC: 56,
      "Speech Tokenizer": 75
    }
  },
  {
    model: "XLSR-SLS",
    values: {
      Original: 100,
      Encodec: 51,
      "Lyra-V2": 52,
      "Descript Audio Codec": 95,
      L3AC: 53,
      "Speech Tokenizer": 67
    }
  },
  {
    model: "XLSR-MAMBA",
    values: {
      Original: 100,
      Encodec: 51,
      "Lyra-V2": 50,
      "Descript Audio Codec": 98,
      L3AC: 59,
      "Speech Tokenizer": 77
    }
  }
];

const eerData = [
  {
    model: "XLSR-AASIST",
    values: {
      Original: 0,
      Encodec: 40,
      "Lyra-V2": 50,
      "Descript Audio Codec": 2,
      L3AC: 19,
      "Speech Tokenizer": 7
    }
  },
  {
    model: "XLSR-SLS",
    values: {
      Original: 0,
      Encodec: 20,
      "Lyra-V2": 28,
      "Descript Audio Codec": 2,
      L3AC: 16,
      "Speech Tokenizer": 8
    }
  },
  {
    model: "XLSR-MAMBA",
    values: {
      Original: 0,
      Encodec: 33,
      "Lyra-V2": 51,
      "Descript Audio Codec": 2,
      L3AC: 19,
      "Speech Tokenizer": 9
    }
  }
];

