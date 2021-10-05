let numOfDownload = 0;
let  thanksGiving = document.querySelector('.thanks-giving')
const downloadBtn2 = document.querySelector(".download-btn");



window.onload = () => {

  const download = document.querySelector("#download").addEventListener("click", () => {

    numOfDownload += 1;

      const resumePdf = document.querySelector("#resume-download-pdf");

      html2pdf().from(resumePdf).save();

      console.log(resumePdf);

   
      thanksGiving.classList.remove('hidden');
    document.querySelector(".web-resume-d").classList.add("hidden");
    downloadBtn2.classList.add('hidden')
  // console.log('@@#');

    });
};