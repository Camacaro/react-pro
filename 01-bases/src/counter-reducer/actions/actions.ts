
export type CounterAction = 
  | { type: 'increaseBy', payload: { value: number; } }
  | { type: "reset" }

/**
 * Action Creators
 * Mantener las acciones en un mismo lugar
 * 
 */

export const doReset = (): CounterAction => ({ type: 'reset' });

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value }
})

