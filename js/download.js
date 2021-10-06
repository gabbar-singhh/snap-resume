let  thanksGiving = document.querySelector('.thanks-giving')
const downloadBtn2 = document.querySelector(".download-btn");



// window.onload = () => {

  document.querySelector("#download").addEventListener("click", () => {

      const resumePdf = document.querySelector("#resume-download-pdf");
      console.log(resumePdf);

      console.log('save1');
      html2pdf().from(resumePdf).save();
      console.log('save2');

setInterval(() => {
  thanksGiving.classList.remove('hidden');
    document.querySelector(".web-resume-d").classList.add("hidden");
    downloadBtn2.classList.add('hidden')

}, 300);
    
    });
// };