import "./styles.scss";
import "./components/image-card/index";
import sourceImages from "./source.json";
import generatedImages from "./generated.json";

export const status = {
  UPLOADED: "uploaded",
  PROCESSED: "processed"
};

const sourceList = sourceImages.map((s) => {
  return `<image-card 
            status=${s.status} 
            repeat="true"
            image=${s.image}
            >
          </image-card>`;
});

// const generatedList1 = generatedImages
//   .filter((g) => g.source === 1)
//   .map((gim) => gim.generated)
//   .map((i) => {
//     return `<image-card
//             image=${i.image}
//             >
//           </image-card>`;
//   });

const generatedList = sourceImages.reverse().map((i) => {
  return `<image-card image=${i.image}></image-card>`;
});
document.getElementById("app").innerHTML = `
    <div class="container">
        <div class="section">
          <div class="section-header">Upload</div>
          <div class="dropzone">
            <p>Drag one or more files to this <i>drop zone</i>.</p>
          </div>      
        </div>
        <div class="section">
          <div class="section-header">Source Images</div>
          <div class="image-container">
            ${sourceList.join("")}
          </div>
        </div>
        <div class="section">
          <div class="section-header">Generated Images</div>
          <h3>Dark Skin Tones</h3>
          <div class="image-container">
            ${generatedList.slice(0, 2).join("")}
          </div>
          <h3>Medium Skin Tones</h3>
          <div class="image-container">
            ${generatedList.slice(1, 3).join("")}
          </div>
          <h3>Light Skin Tones</h3>
          <div class="image-container">
            ${generatedList.slice(0, 3).join("")}
          </div>          
        </div>
        <div class="section">
          <div class="section-header">JSON</div>
            <div>${JSON.stringify(
              generatedImages
                .filter((g) => g.source === 1)
                .map((gim) => gim.generated)
                .map((i) => i)
            )}</div>  
        </div>
        </div>
      </div>
    `;
