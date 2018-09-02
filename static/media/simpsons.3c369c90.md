<div class="row">
	<div class="col s12">
	  <div class="row">
	    <div class="input-field col s9">
	      <input type="text" id="imurl" value="https://pbs.twimg.com/profile_images/765263431318511617/HfUmI60s.jpg">
	      <label for="imurl">Image Url</label>
	    </div>
	    <div class="input-field col s3">
			<a class="waves-effect waves-light btn" href="#" onclick="predict()" style="width: 100%">Predict</a>
	    </div>
	  </div>
	</div>
</div>
<canvas id="canvas" width="300" height="300"></canvas>

### Result
#### ?

<script type="text/javascript" src="/assets/keras.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
const model = new KerasJS.Model({
filepaths: {
  model: '/model.json',
  weights: '/bart_homer_weights_weights.buf',
  metadata: '/bart_homer_weights_metadata.json'
},
gpu: true
})
function predict(value) {
$('.card-panel h4').text('?');
let imUrl = value || document.getElementById('imurl').value;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
console.log(imUrl);
let img = new Image;
img.crossOrigin = "anonymous";
img.onload = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var hRatio = canvas.width / img.width    ;
  var vRatio = canvas.height / img.height  ;
  var ratio  = Math.min ( hRatio, vRatio );
  ctx.drawImage(img, 0,0, img.width, img.height, 0,0,img.width*ratio, img.height*ratio);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let pixels = imgData.data;
  let w = imgData.width;
  let h = imgData.height;
  let dataMatrix = new Array();
  let l = w * h;
  for (let i = 0; i < l; i++) {
      // get color of pixel
      dataMatrix.push(pixels[i*4]); // Red
      dataMatrix.push(pixels[i*4+1]); // Green
      dataMatrix.push(pixels[i*4+2]); // Blue
      //let a = pixels[i*4+3]; // Alpha
  }
  model.predict({ input: new Float32Array(dataMatrix) }).then((result) => {
    let classes = ["Bart", "Homer"];
    console.log(classes[Math.round(result.output[0])], result.output[0]);
    $('.card-panel h4').text(classes[Math.round(result.output[0])]);
  });
};
img.src = "/misc/images?i=" + imUrl;
}
$(function() {
$("a.predict").click((ev) => {
  ev.preventDefault();
  predict(ev.target.href);
  return false;
});
});
</script>
