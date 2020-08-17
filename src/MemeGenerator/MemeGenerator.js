import React from "react";

class MemeGenerator extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: [],
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes,
        });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  getRandomMeme = () => {
    const allMemeImgs = this.state.allMemeImgs;

    this.setState({
      randomImage:
        allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url,
    });
  };

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.topText}
            placeholder="Top-Text"
            name="topText"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.bottomText}
            placeholder="Bottom-Text"
            name="bottomText"
            onChange={this.handleChange}
          />

          <button onClick={this.getRandomMeme}>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top"> {this.state.topText}</h2>
          <h2 className="bottom"> {this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
