import { act, renderHook, screen } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog', () => {
  it('should renders nothing', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should set a new useConfirmationDialog item', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const newItem = { id: '1', name: 'item-1' };

    // Act
    act(() => {
      result.current.onOpenDialog(newItem);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(newItem);
  });

  it('should close useConfirmationDialog when clicking onClose', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const newItem = { id: '2', name: 'item-2' };

    // Act
    act(() => {
      result.current.onOpenDialog(newItem);
    });

    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('should remove item from useConfirmationDialog when clicking onAccept', () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const newItem = { id: '3', name: 'item-3' };

    // Act
    act(() => {
      result.current.onOpenDialog(newItem);
    });

    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });
});
