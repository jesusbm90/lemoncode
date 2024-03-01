import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('project mapper specs', () => {
  it.each<apiModel.Project>([undefined, null])(
    'should return emtpy Project when %p is passed in',
    (project: any) => {
      // Arrange
      const undefinedProject: apiModel.Project = project;

      // Act
      const result: viewModel.Project = mapProjectFromApiToVm(undefinedProject);

      // Assert
      const expectedResult: viewModel.Project = {
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      };

      expect(result).toEqual(expectedResult);
    }
  );

  it('should return a Project when just a key is passed in with no optional keys', () => {
    // Arrange
    const project: viewModel.Project = {
      id: '1',
      name: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(project);
  });

  it('should return a Project when all keys are passed except the employees key and the optional keys', () => {
    // Arrange
    const project: viewModel.Project = {
      id: '1',
      name: 'name-1',
      isActive: true,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(project);
  });

  it('should return a Project when all keys are passed in with no optional keys', () => {
    // Arrange
    const project: viewModel.Project = {
      id: '1',
      name: 'name-1',
      isActive: true,
      employees: [{ id: '1', employeeName: 'name-1' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(project);
  });

  it('should return a Project when all keys are passed including optional keys', () => {
    // Arrange
    const project: viewModel.Project = {
      id: '1',
      name: 'name-1',
      externalId: 'ex-1',
      comments: 'name-1 with id 1',
      isActive: true,
      employees: [{ id: '1', isAssigned: false, employeeName: 'name-1' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(project);
  });
});
