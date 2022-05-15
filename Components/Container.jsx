const Container = ({children}) => {
    return ( 

        <section className="py-4 osahan-main-body">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="osahan-listing">
                        <div className="d-flex align-items-center mb-3">
                            <h4>Fodder Listing</h4>
                            <div className="m-0 text-center ml-auto">
                                <a href="listing" data-toggle="modal" data-target="#exampleModal"
                                    className="btn text-muted bg-white mr-2"><i className="icofont-filter mr-1"></i> Filter</a>
                                <a href="listing" data-toggle="modal" data-target="#exampleModal"
                                    className="btn text-muted bg-white"><i className="icofont-signal mr-1"></i> Sort</a>
                            </div>
                        </div>
                        <div className="row">
                                {children}                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Container;