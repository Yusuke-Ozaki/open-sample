
import React from 'react';
import ApiPost from '../../compoents/ApiPost';
import Appform from './Appform'
export class GoodsCreate extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            goodsLists:[],
            goods:[],
            goods_id:[],
            size:[],
            amount:[],
            note:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target=event.target;
        const value=target.value;
        const name=target.name;
        this.setState({[name]:value});

      }
    
      handleSubmit(event) {
        event.preventDefault();
        alert('登録しました');
       {ApiPost()}
      }
      
      render() {

    return (
<div>



<h1>商品登録</h1>
<form onSubmit={this.handleSubmit}>
        <table>
            <tr>
                <th>商品名</th>
                <td>    
                <input
                    name="goods"
                    type="text"
                    value={this.state.goods}
                    onChange={this.handleChange} />
                </td>
            </tr>
            <tr>
                <th>商品ID</th>
                <td>
                <input
                    name="goods_id"
                    type="text"
                    value={this.state.goods_id}
                    onChange={this.handleChange} />
                </td>
            </tr>
            <tr>
                <th>サイズ</th>
                <td>
                <input
                    name="size"
                    type="text"
                    value={this.state.size}
                    onChange={this.handleChange} />
                </td>
            </tr>
            <tr>
                <th>数量</th>
                <td>
                <input
                    name="amount"
                    type="text"
                    value={this.state.amount}
                    onChange={this.handleChange} />
                </td>
            </tr>
            <tr>
                <th>メモ</th>
                <td>
                <input
                    name="memo"
                    type="text"
                    value={this.state.memo}
                    onChange={this.handleChange} />
                </td>
            </tr>
        </table>
        <button class="block" type="submit">登録</button>
    </form>


</div> 
    );
};

}
