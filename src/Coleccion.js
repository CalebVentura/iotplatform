import React, { Component } from 'react'
import db from './FirestoreConfig';

export default class Coleccion extends Component {

    state = {
        items:[]
    }

    componentDidMount(){
        db.collection('flotas').get().then((snapShots)=>{
            this.setState({
                items:snapShots.docs.map(doc=>{
                    console.log(doc.data());
                    return{id:doc.id, data:doc.data()}
                })
            })
        })
    }

    render() {

        const {items}=this.state;

        return (
            <div>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Region</th>
                    <th scope="col">Temperatura</th>
                    <th scope="col">conductor</th>
                    </tr>
                </thead>
                <tbody>
                {items && items !== undefined ? items.map((item,key)=>(
                        <tr key={key}>
                            <td>{item.data.numero}</td>
                            <td>{item.data.region}</td>
                            <td>{item.data.temperatura}</td>
                            <td>{item.data.conductor}</td>
                        </tr>
                    )):null}
                </tbody>
                </table>
            </div>
        )
    }
}
