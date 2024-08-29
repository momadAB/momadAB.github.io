import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function generatePDF() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const element = document.getElementById('preview');

  // Render the visual appearance using html2canvas
  html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 595.28;
    const imgHeight = 840;
    console.log(imgHeight);

    // Add the image to the PDF
    doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

    // Set transparent text color and default font size
    doc.setTextColor(255, 255, 255); 
    doc.setGState(new doc.GState({ opacity: 0 }));  // Transparent text

    // Position to start adding text
    let positionY = 50; // Initial vertical position
    const lineHeight = 20; // Adjust based on text size

    // Loop through all elements inside the #preview container
    const elements = element.querySelectorAll('*');
    elements.forEach((el) => {
      const text = el.innerText.trim();
      if (text) {
        // Add text to the PDF
        doc.text(text, 40, positionY);
        positionY += lineHeight; // Move to the next line
      }
    });

    // Save the PDF
    doc.save(`${document.querySelector('.cvname').innerText}_CV.pdf`);
  });
}
