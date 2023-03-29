import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { getActions } from '../../store/actions/alertAction';
import { connect } from 'react-redux';
function AlertNotification({
    showAlertMessage,
    closeAlertMessage,
    alertMessageContent,
}) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={showAlertMessage}
            onClose={closeAlertMessage}
            autoHideDuration={6000}
        >
            <Alert severity='info'>{alertMessageContent}</Alert>
        </Snackbar>
    )
}
const mapStoreStateToProps = ({ alert }) => {
    return {
        ...alert
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotification);