import React from 'react';
import { Grid, Modal, Glyphicon } from 'react-bootstrap';

const Success = () => (
  <Grid >
    <div className="center topPadd">
      <Modal.Dialog className="animation rotateIn ">
        <div className="topPadd">
          <Glyphicon glyph="glyphicon glyphicon-ok" className="successMark" />
        </div>
        <h1 className="headerText"> Submission Success ! </h1>
        <div className="topPadd bottomPadd">
          <h4>Check your email for a confirmation message.</h4>
        </div>
      </Modal.Dialog>
    </div>
  </Grid>
)

export default Success;

