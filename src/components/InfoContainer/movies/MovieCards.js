import './MovieCards.css';

export default function(props){
  let image = "url('https://image.tmdb.org/t/p/w500/" + props.details.poster_path + "')";
  return (
    <div class="col-md-6 col-lg-4 column">
      <div class="card_2" style={{backgroundImage:image,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <div class="txt">
          <h1>{props.details.name?props.details.name:props.details.title}<br></br><span style={{fontSize:"20px"}}>{props.details.release_date}</span></h1>
          <p style={{fontSize:"0.8rem",fontWeight:"400"}}>{props.details.overview}</p>
        </div>
        <a href="#" style={{fontSize:"1rem"}}>more</a>
        <div class="ico-card">
          <i class="fab fa-empire"></i>
        </div>
      </div>
    </div>
  )
}
