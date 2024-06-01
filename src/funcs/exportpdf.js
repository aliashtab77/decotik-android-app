import RNHTMLtoPDF from "react-native-html-to-pdf";
import FileViewer from "react-native-file-viewer";


export async function createPDF(html) {
  let options = {
    html: html,
    directory: 'pdfs',
  };

  let file = await RNHTMLtoPDF.convert(options)

  try {
    await FileViewer.open(file.filePath, { showOpenWithDialog: true, showAppsSuggestions: true });
  } catch (e) {
    console.warn("An error occurred", JSON.stringify(e));
  }

}
