import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent component specs', () => {
  it('should NOT render the ConfirmationDialogComponent dialog component', () => {
    // Arrange
    const onClose = jest.fn();
    const onAccept = jest.fn();
    const labels = { closeButton: 'Cancelar', acceptButton: 'Aceptar' };

    // Act
    render(
      <ConfirmationDialogComponent
        isOpen={false}
        onAccept={onAccept}
        onClose={onClose}
        title="Titulo Modal"
        labels={labels}
      >
        <div>Contenido Modal</div>
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(
      screen.queryByRole('dialog', { name: 'Titulo Modal' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Titulo Modal' })
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Contenido Modal')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Cancelar' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Aceptar' })
    ).not.toBeInTheDocument();
  });

  it('should renders the ConfirmationDialogComponent dialog component', () => {
    // Arrange
    const onClose = jest.fn();
    const onAccept = jest.fn();
    const labels = { closeButton: 'Cancelar', acceptButton: 'Aceptar' };

    // Act
    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={onAccept}
        onClose={onClose}
        title="Titulo Modal"
        labels={labels}
      >
        <div>Contenido Modal</div>
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(
      screen.getByRole('dialog', { name: 'Titulo Modal' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Titulo Modal' })
    ).toBeInTheDocument();
    expect(screen.getByText('Contenido Modal')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Cancelar' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Aceptar' })).toBeInTheDocument();
  });

  it('should click on Cancelar button and fire the onClose event', () => {
    // Arrange
    const onClose = jest.fn();
    const onAccept = jest.fn();
    const labels = { closeButton: 'Cancelar', acceptButton: 'Aceptar' };

    // Act
    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={onAccept}
        onClose={onClose}
        title="Titulo Modal"
        labels={labels}
      >
        <div>Contenido Modal</div>
      </ConfirmationDialogComponent>
    );
    const getCloseButton = screen.queryByRole('button', { name: 'Cancelar' });
    fireEvent.click(getCloseButton);

    // Assert
    expect(onClose).toHaveBeenCalled();
  });

  it('should click on Aceptar button and fire the onAccept event', () => {
    // Arrange
    const onClose = jest.fn();
    const onAccept = jest.fn();
    const labels = { closeButton: 'Cancelar', acceptButton: 'Aceptar' };

    // Act
    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={onAccept}
        onClose={onClose}
        title="Titulo Modal"
        labels={labels}
      >
        <div>Contenido Modal</div>
      </ConfirmationDialogComponent>
    );
    const getAcceptButton = screen.queryByRole('button', { name: 'Aceptar' });
    fireEvent.click(getAcceptButton);

    // Assert
    expect(onAccept).toHaveBeenCalled();
  });
});
