import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the sampleextension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'sampleextension',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension sampleextension is activated!');
  }
};

export default extension;
