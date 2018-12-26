import React, { Component } from 'react';

class MakeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    plusRating = () => {
        this.setState(prevVote => {
            return {
                counter: prevVote.counter + 1
            };
        })
    }

    minusRating = () => {
        this.setState(prevVote => {
            return {
                counter: prevVote.counter - 1
            }
        })
    }

    render() {
        return (
            <div className="item">
                <h2>{this.props.item.name}</h2>
                <h3>{this.props.item.type}</h3>
                <h4>
                    {this.props.item.restaurant} {this.props.item.location}
                </h4>
                <div>
                    <span>{this.state.counter} Votes</span>&nbsp;
                        <button onClick={this.plusRating}>+</button>&nbsp;
                        <button onClick={this.minusRating}>-</button>
                </div>
            </div>
        );
    }
}

class MakeItemContent extends Component {

    render() {
        return (
            <div className="allItem">
                {this.props.foodList.map(item => <MakeItem key={item.name} item={item} />)}
            </div>
        );
    }
}


class Sohel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        }

    }


    handleAdd = (item) => {
        item.preventDefault();

        let foodName = item.target.elements.foodName.value;
        let foodType = item.target.elements.foodType.value;
        let restName = item.target.elements.restName.value;
        let location = item.target.elements.location.value;
        let price = item.target.elements.price.value;

        const food = {
            name: foodName,
            type: foodType,
            restaurant: restName,
            location: location,
            price: price
        }

        this.setState(state => {
            let list = state.itemList.push(food);
            return { list };
        });
    }
    render() {
        return (
            <div className="App">
                <div className="form">
                    <form onSubmit={this.handleAdd}>

                        <label>Food Name</label>
                        <input name="foodName" type="text" />

                        <label>Food Type</label>
                        <input name="foodType" type="text" />

                        <label>Restaurant Name</label>
                        <input name="restName" type="text" />

                        <label>Location</label>
                        <input name="location" type="text" />

                        <label>Price</label>
                        <input name="price" type="text" />

                        <button>+Add Item</button>
                    </form>

                </div>
                <div className="hide">
                    <button>Hide</button>
                </div>
                <div className="itemBox">
                    <h1>List Of All The Good Mood Foods </h1>
                    <hr />
                    <MakeItemContent foodList={this.state.itemList} />
                </div>
            </div>
        );
    }
}

export default Sohel;