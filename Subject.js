import React, { Component } from 'react';

class Subject extends Component{
    render(){
      console.log('Subject render');
      return(
        <article>
        <h1 ><a href="/" className="FONT" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage(); //이부분을 메인 페이지 연결로 바꾸면 될듯
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </article>
      );
    }
  }
  
export default Subject;