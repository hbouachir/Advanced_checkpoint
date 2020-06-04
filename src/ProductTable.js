import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const ProductTable=(props) =>{
  return (
    <div className="App">
     <div className="limiter">
		<div className="container-table100">
			<div className="wrap-table100">
					<div className="table">

						<div className="row header">
							<div className="cell">
								<h1>Name</h1>
							</div>
							<div className="cell">
              <h1>Category</h1>
							</div>
							<div className="cell">
              <h1>Price</h1>
							</div>
							
						</div>
            {props.tab.map(el=>
            <div className="row">
							<div className="cell" data-title="Full Name">
							<h1>	{el.name}</h1>
							</div>
							<div className="cell" data-title="Age">
							<h1>	{el.category}</h1>
							</div>
							<div className="cell" data-title="Job Title">
							<h1>	{el.price}</h1>
							</div>
							
						</div>
            )}
          </div>  


        </div>
      </div>
    </div>




   
  



    </div>
  );
}
ProductTable.defaultProps={tab:[],};
ProductTable.propTypes={
  tab:PropTypes.array,
}


export default ProductTable;
