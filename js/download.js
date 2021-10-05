window.onload = () => {
  const download = document
    .querySelector("#download")
    .addEventListener("click", () => {
      const resumePdf = document.querySelector("#resume-download-pdf");
      console.log(resumePdf);

      html2pdf().from(resumePdf).save();
    });
};