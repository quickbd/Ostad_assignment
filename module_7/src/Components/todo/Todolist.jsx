 

const Todolist = () => {
    return (
        <>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" /> 
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others <button className="btn btn-xs btn-link"><i className="fa fa-trush"></i></button>
          </div>
          <div className="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
        </>
    );
};

export default Todolist;
 
