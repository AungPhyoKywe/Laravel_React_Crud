import React from 'react';
import ReactDOM from 'react-dom';
function Create() {
    return (
        <div className="container">
            <form>

                <div class="form-group row">
                     <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Enter Title"/>
                        </div>
                </div>
                <div className="form-group row">
                    <button className="form-control btn btn-primary"type="submit">save</button>

                </div>
        </form>
        </div>
    );
}

export default Create;

