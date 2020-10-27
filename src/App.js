import './App.css';
import React from 'react';
import TodoList from './components/pages/things/TodoList';
import Achievement from './components/pages/things/Achievement';

function App() {
  return (
    <div className="container-fluid m-3">
      <div className="row">
        <div className="col">
          <form>
            <div class="form-group">
              <label for="comment">NOTE:</label>
              <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
          </form>
        </div>
        <div className="col">
          <TodoList />
        </div>
        <div className="col">
          <Achievement />
        </div>
      </div>
    </div>
  );
}
export default App;
