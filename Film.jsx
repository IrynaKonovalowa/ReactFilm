class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.data.title, path: this.props.data.path, filmmaker: this.props.data.filmmaker, year: this.props.data.year,
      country: this.props.data.country, genre: this.props.data.genre, acteurs: this.props.data.acteurs, info: this.props.data.info};
  }

    render() {
    return (
      <div>
        <img src={this.state.path} alt="Wonka" />
        <h1>{this.state.title}</h1>
        <div class="divFilm">
        <p><span>Réalisateur:</span> {this.state.filmmaker}</p>
        <p><span>Sortie:</span> {this.state.year}</p>
        <p><span>Pays de production:</span> {this.state.country}</p>
        <p><span>Genre:</span> {this.state.genre}</p>
        <p><span>Acteurs principaux: </span>{this.state.acteurs}</p>
        </div>        
        <FilmInfo info={this.state.info}/>
        </div>
    );
  }
}
