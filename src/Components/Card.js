import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/Reducers/CounterSlice'

function Card() {
  
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()


    return (
        <><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h3>Counter {count}</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <button className="btn btn-success" onClick={() => dispatch(increment())}>Increment</button>&nbsp;
                                <button className="btn btn-danger" onClick={()=>dispatch(decrement())}>Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;