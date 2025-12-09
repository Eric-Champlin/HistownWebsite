import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import { NextSteps } from '../components/sections/NextSteps';
import { BREAKPOINTS } from '../constants/responsive';

/**
 * Feature: mobile-optimization, Property 9: Full-width form fields on mobile
 * Validates: Requirements 4.1, 14.3
 * 
 * Property: For any form input or textarea on mobile viewports, 
 * the computed width should be 100% of its container (minus padding), 
 * ensuring optimal mobile form experience.
 */
describe('Property 9: Full-width form fields on mobile', () => {
  /**
   * Property: All form inputs should have w-full class on mobile
   */
  it('should render all form inputs with w-full class', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }), // Number of times to test
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all input elements
            const inputs = container.querySelectorAll('input');
            
            // Property: Every input should have w-full class
            inputs.forEach(input => {
              expect(input.classList.contains('w-full')).toBe(true);
            });
            
            // Verify we actually found inputs
            expect(inputs.length).toBeGreaterThan(0);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: All form textareas should have w-full class on mobile
   */
  it('should render all textareas with w-full class', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all textarea elements
            const textareas = container.querySelectorAll('textarea');
            
            // Property: Every textarea should have w-full class
            textareas.forEach(textarea => {
              expect(textarea.classList.contains('w-full')).toBe(true);
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Form buttons should have w-full class on mobile
   */
  it('should render form buttons with w-full class for mobile', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all buttons
            const buttons = container.querySelectorAll('button');
            
            // Property: Every button should have w-full class (for mobile)
            // Note: They may also have sm:w-auto for desktop
            buttons.forEach(button => {
              expect(button.classList.contains('w-full')).toBe(true);
            });
            
            // Verify we actually found buttons
            expect(buttons.length).toBeGreaterThan(0);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Form fields should maintain full-width across different component props
   */
  it('should maintain full-width inputs regardless of component props', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 50 }),
          description: fc.string({ minLength: 10, maxLength: 200 }),
          emailSignupForm: fc.boolean(),
        }),
        (props) => {
          const { container } = render(
            <BrowserRouter>
              <NextSteps {...props} />
            </BrowserRouter>
          );
          
          // Get all input elements
          const inputs = container.querySelectorAll('input');
          
          // Property: Every input should have w-full class regardless of props
          inputs.forEach(input => {
            expect(input.classList.contains('w-full')).toBe(true);
          });
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Form container should not restrict input width
   */
  it('should not have max-width restrictions on form inputs', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all input elements
            const inputs = container.querySelectorAll('input');
            
            // Property: Inputs should have w-full and not have restrictive max-width classes
            inputs.forEach(input => {
              const classes = Array.from(input.classList);
              
              // Should have w-full
              expect(classes).toContain('w-full');
              
              // Should not have restrictive width classes like w-1/2, w-64, etc.
              const hasRestrictiveWidth = classes.some(c => 
                c.match(/^w-\d+$/) || // w-64, w-32, etc.
                c.match(/^w-\d+\/\d+$/) // w-1/2, w-2/3, etc.
              );
              expect(hasRestrictiveWidth).toBe(false);
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Form labels should be associated with full-width inputs
   */
  it('should have labels associated with full-width inputs', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all labels
            const labels = container.querySelectorAll('label');
            
            // Property: Each label should be followed by a full-width input
            labels.forEach(label => {
              const labelText = label.textContent;
              
              // Find the associated input (next sibling or by proximity)
              const parentDiv = label.parentElement;
              if (parentDiv) {
                const input = parentDiv.querySelector('input');
                if (input) {
                  expect(input.classList.contains('w-full')).toBe(true);
                }
              }
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Submit buttons should be full-width on mobile
   */
  it('should render submit buttons with full width', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get submit button
            const submitButton = container.querySelector('button[type="submit"]');
            
            // Property: Submit button should have w-full class
            if (submitButton) {
              expect(submitButton.classList.contains('w-full')).toBe(true);
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });
});


/**
 * Feature: mobile-optimization, Property 10: Appropriate input types for mobile keyboards
 * Validates: Requirements 4.2, 14.4
 * 
 * Property: For any form input, the type attribute should match the expected data 
 * (type="email" for email, type="tel" for phone, type="number" for numbers), 
 * ensuring correct mobile keyboard display.
 */
describe('Property 10: Appropriate input types for mobile keyboards', () => {
  /**
   * Property: Email inputs should have type="email"
   */
  it('should render email inputs with type="email"', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Find email input by placeholder or label
            const emailInput = container.querySelector('input[placeholder*="email" i]') ||
                              container.querySelector('input[type="email"]');
            
            // Property: Email input should have type="email"
            if (emailInput) {
              expect(emailInput.getAttribute('type')).toBe('email');
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Text inputs should have type="text"
   */
  it('should render text inputs with type="text"', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Find name/text input by placeholder
            const textInput = container.querySelector('input[placeholder*="name" i]') ||
                             container.querySelector('input[placeholder*="first" i]');
            
            // Property: Text input should have type="text"
            if (textInput) {
              expect(textInput.getAttribute('type')).toBe('text');
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: All inputs should have appropriate type attributes
   */
  it('should have appropriate type attributes for all inputs', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all inputs
            const inputs = container.querySelectorAll('input');
            
            // Property: Every input should have a type attribute
            inputs.forEach(input => {
              const type = input.getAttribute('type');
              expect(type).toBeTruthy();
              
              // Type should be one of the valid HTML5 input types
              const validTypes = [
                'text', 'email', 'tel', 'number', 'password', 
                'url', 'search', 'date', 'time', 'datetime-local',
                'month', 'week', 'color', 'file', 'hidden',
                'checkbox', 'radio', 'submit', 'button', 'reset'
              ];
              expect(validTypes).toContain(type);
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Input types should match their semantic purpose
   */
  it('should match input types to their semantic purpose', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Check email field
            const emailLabel = Array.from(container.querySelectorAll('label'))
              .find(label => label.textContent?.toLowerCase().includes('email'));
            
            if (emailLabel) {
              const parentDiv = emailLabel.parentElement;
              const emailInput = parentDiv?.querySelector('input');
              
              // Property: Email field should have type="email"
              if (emailInput) {
                expect(emailInput.getAttribute('type')).toBe('email');
              }
            }
            
            // Check name field
            const nameLabel = Array.from(container.querySelectorAll('label'))
              .find(label => label.textContent?.toLowerCase().includes('name'));
            
            if (nameLabel) {
              const parentDiv = nameLabel.parentElement;
              const nameInput = parentDiv?.querySelector('input');
              
              // Property: Name field should have type="text"
              if (nameInput) {
                expect(nameInput.getAttribute('type')).toBe('text');
              }
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Input types should be consistent across renders
   */
  it('should maintain consistent input types across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const inputTypes: { [key: string]: string }[] = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            const inputs = container.querySelectorAll('input');
            const types: { [key: string]: string } = {};
            
            inputs.forEach((input, index) => {
              const placeholder = input.getAttribute('placeholder') || `input-${index}`;
              types[placeholder] = input.getAttribute('type') || '';
            });
            
            inputTypes.push(types);
          }
          
          // Property: All renders should have identical input types
          if (inputTypes.length > 1) {
            const firstTypes = inputTypes[0];
            
            for (let i = 1; i < inputTypes.length; i++) {
              const currentTypes = inputTypes[i];
              
              // Check that all placeholders have the same types
              Object.keys(firstTypes).forEach(placeholder => {
                expect(currentTypes[placeholder]).toBe(firstTypes[placeholder]);
              });
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Input types should not be generic when specific types are available
   */
  it('should use specific input types instead of generic text where appropriate', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all inputs
            const inputs = container.querySelectorAll('input');
            
            inputs.forEach(input => {
              const placeholder = input.getAttribute('placeholder')?.toLowerCase() || '';
              const type = input.getAttribute('type');
              
              // Property: Email placeholders should use type="email"
              if (placeholder.includes('email') || placeholder.includes('@')) {
                expect(type).toBe('email');
              }
              
              // Property: Phone placeholders should use type="tel"
              if (placeholder.includes('phone') || placeholder.includes('tel')) {
                expect(type).toBe('tel');
              }
              
              // Property: Number placeholders should use type="number"
              if (placeholder.includes('number') || placeholder.includes('age') || placeholder.includes('quantity')) {
                expect(type).toBe('number');
              }
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Input types should remain appropriate with different component props
   */
  it('should maintain appropriate input types regardless of component props', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 50 }),
          description: fc.string({ minLength: 10, maxLength: 200 }),
          emailSignupForm: fc.boolean(),
        }),
        (props) => {
          const { container } = render(
            <BrowserRouter>
              <NextSteps {...props} />
            </BrowserRouter>
          );
          
          // Get all inputs
          const inputs = container.querySelectorAll('input');
          
          // Property: Input types should be appropriate regardless of props
          inputs.forEach(input => {
            const type = input.getAttribute('type');
            const placeholder = input.getAttribute('placeholder')?.toLowerCase() || '';
            
            // Verify type matches placeholder semantics
            if (placeholder.includes('email')) {
              expect(type).toBe('email');
            } else if (placeholder.includes('name')) {
              expect(type).toBe('text');
            }
          });
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });
});


/**
 * Feature: mobile-optimization, Property 11: Form label accessibility
 * Validates: Requirements 4.5
 * 
 * Property: For any form input, there should be an associated label element 
 * with matching for/id attributes and the label should be visible, 
 * ensuring accessibility and usability.
 */
describe('Property 11: Form label accessibility', () => {
  /**
   * Property: All form inputs should have associated labels with matching for/id attributes
   */
  it('should have labels with matching for/id attributes for all inputs', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all inputs with IDs
            const inputs = container.querySelectorAll('input[id]');
            
            // Property: Every input with an ID should have a corresponding label
            inputs.forEach(input => {
              const inputId = input.getAttribute('id');
              if (inputId) {
                const label = container.querySelector(`label[for="${inputId}"]`);
                
                // Label should exist
                expect(label).toBeTruthy();
                
                // Label should have text content
                if (label) {
                  expect(label.textContent).toBeTruthy();
                  expect(label.textContent!.trim().length).toBeGreaterThan(0);
                }
              }
            });
            
            // Verify we actually found inputs
            expect(inputs.length).toBeGreaterThan(0);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: All labels should be visible (not hidden)
   */
  it('should render all labels as visible elements', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all labels
            const labels = container.querySelectorAll('label');
            
            // Property: Every label should be visible (not have hidden/sr-only classes)
            labels.forEach(label => {
              const classes = Array.from(label.classList);
              
              // Should not have screen-reader-only or hidden classes
              expect(classes).not.toContain('sr-only');
              expect(classes).not.toContain('hidden');
              expect(classes).not.toContain('invisible');
              
              // Should have text content
              expect(label.textContent).toBeTruthy();
              expect(label.textContent!.trim().length).toBeGreaterThan(0);
            });
            
            // Verify we actually found labels
            expect(labels.length).toBeGreaterThan(0);
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Labels should have the 'block' class for proper display
   */
  it('should render labels with block display class', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all labels
            const labels = container.querySelectorAll('label');
            
            // Property: Every label should have 'block' class for proper display
            labels.forEach(label => {
              expect(label.classList.contains('block')).toBe(true);
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Required fields should be indicated in labels
   */
  it('should indicate required fields in label text', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all required inputs
            const requiredInputs = container.querySelectorAll('input[required]');
            
            // Property: Each required input should have a label with asterisk
            requiredInputs.forEach(input => {
              const inputId = input.getAttribute('id');
              if (inputId) {
                const label = container.querySelector(`label[for="${inputId}"]`);
                
                if (label && label.textContent) {
                  // Label should contain asterisk for required fields
                  expect(label.textContent).toContain('*');
                }
              }
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Label and input association should be consistent across renders
   */
  it('should maintain consistent label-input associations across renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 2, max: 5 }),
        (renderCount) => {
          const associations: { [key: string]: string }[] = [];
          
          for (let i = 0; i < renderCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            const labels = container.querySelectorAll('label[for]');
            const currentAssociations: { [key: string]: string } = {};
            
            labels.forEach(label => {
              const forAttr = label.getAttribute('for');
              const labelText = label.textContent?.trim() || '';
              
              if (forAttr) {
                currentAssociations[forAttr] = labelText;
              }
            });
            
            associations.push(currentAssociations);
          }
          
          // Property: All renders should have identical label-input associations
          if (associations.length > 1) {
            const firstAssociations = associations[0];
            
            for (let i = 1; i < associations.length; i++) {
              const currentAssociations = associations[i];
              
              // Check that all IDs have the same label text
              Object.keys(firstAssociations).forEach(inputId => {
                expect(currentAssociations[inputId]).toBe(firstAssociations[inputId]);
              });
            }
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: All form inputs should have either a label or aria-label
   */
  it('should have either a label or aria-label for all inputs', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all inputs
            const inputs = container.querySelectorAll('input');
            
            // Property: Every input should have either a label or aria-label
            inputs.forEach(input => {
              const inputId = input.getAttribute('id');
              const ariaLabel = input.getAttribute('aria-label');
              
              // Should have either an ID (for label association) or aria-label
              const hasLabel = !!(inputId && container.querySelector(`label[for="${inputId}"]`));
              const hasAriaLabel = !!(ariaLabel && ariaLabel.trim().length > 0);
              
              expect(hasLabel || hasAriaLabel).toBe(true);
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Labels should be positioned before their inputs in DOM order
   */
  it('should position labels before their associated inputs', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all labels with for attribute
            const labels = container.querySelectorAll('label[for]');
            
            // Property: Each label should come before its input in DOM order
            labels.forEach(label => {
              const forAttr = label.getAttribute('for');
              if (forAttr) {
                const input = container.querySelector(`#${forAttr}`);
                
                if (input) {
                  // Get parent container
                  const labelParent = label.parentElement;
                  const inputParent = input.parentElement;
                  
                  // If they share the same parent, label should come first
                  if (labelParent === inputParent) {
                    const children = Array.from(labelParent?.children || []);
                    const labelIndex = children.indexOf(label as Element);
                    const inputIndex = children.indexOf(input as Element);
                    
                    expect(labelIndex).toBeLessThan(inputIndex);
                  }
                }
              }
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  /**
   * Property: Label text should be descriptive and meaningful
   */
  it('should have descriptive and meaningful label text', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10 }),
        (testCount) => {
          for (let i = 0; i < testCount; i++) {
            const { container } = render(
              <BrowserRouter>
                <NextSteps />
              </BrowserRouter>
            );
            
            // Get all labels
            const labels = container.querySelectorAll('label');
            
            // Property: Every label should have meaningful text (not just symbols)
            labels.forEach(label => {
              const text = label.textContent?.trim() || '';
              
              // Should have text
              expect(text.length).toBeGreaterThan(0);
              
              // Should have at least one letter (not just symbols like *)
              expect(text).toMatch(/[a-zA-Z]/);
              
              // Should not be too short (at least 2 characters excluding asterisk)
              const textWithoutAsterisk = text.replace('*', '').trim();
              expect(textWithoutAsterisk.length).toBeGreaterThanOrEqual(2);
            });
          }
          
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });
});
