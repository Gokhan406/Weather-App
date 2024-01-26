import React, { Component } from 'react'

export class Inputs extends Component {
    constructor(props){
        super(props);
        this.ınputText = this.ınputText.bind(this);
        this.parseText = this.parseText.bind(this);

        this.state = {
            ınputtext:""
        }
    }

    ınputText(event){
        event.preventDefault();

        const ınput_text = event.target.value;
        if(ınput_text !== ""){
            this.setState({ınputtext:ınput_text});
        }
    }

    parseText(event){
        event.preventDefault();
        this.props.request_weather(this.state.ınputtext);
        event.target.elements.txtInput.value="";
    }

  render() {
    return (
        <div className='form'>
            <form onSubmit={this.parseText}>
                <input type="text" placeholder='Şehir ismi' className='txtInput' name='txtInput' onChange={(event) => this.ınputText(event)}/>
                <button type='submit' className='button'>Ara</button>
            </form>
        </div>
        
    );
  }
}

export default Inputs