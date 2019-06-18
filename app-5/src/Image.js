import React,{Component} from 'react'

class Image extends Component {
    render () {
        return (
            <div>
                <img src = {this.props.url}/>
                <caption>So True!</caption>
            </div>
        )
    }
}

export default Image