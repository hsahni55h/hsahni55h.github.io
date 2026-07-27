export interface Certification {
  name: string;
  issuer: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    name: "Generative Adversarial Networks (GANs)",
    issuer: "Coursera",
    url: "https://coursera.org/share/c04f8f9228ea917e69738fa6d18fbc8b",
  },
  {
    name: "DeepLearning.AI TensorFlow Developer",
    issuer: "Coursera",
    url: "https://coursera.org/share/8a435d83c3cbf4fb04263ace725f9b15",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera",
    url: "https://coursera.org/share/f26ffce6f02254bf68c1c14e35a8478e",
  },
  {
    name: "Machine Learning",
    issuer: "Coursera",
    url: "https://coursera.org/share/13dcf9a8c1721bf5aa5c07ce3e7362b5",
  },
];
