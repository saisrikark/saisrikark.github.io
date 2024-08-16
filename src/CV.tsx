import { saveAs } from 'file-saver';

const resumePDFURL = "https://raw.githubusercontent.com/saisrikark/saisrikark.github.io/master/public/Sai_Srikar_K.pdf"
const pdfName = "Sai_Srikar_Komaravolu_Resume.pdf"


const DownloadResumePDF = async () => {
  try {
    const response = await fetch(resumePDFURL);      
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const blob = await response.blob();

    saveAs(blob, pdfName);
  } catch (error) {
    console.error('Error downloading the PDF:', error);
  }
};

export default DownloadResumePDF;