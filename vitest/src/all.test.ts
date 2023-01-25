import sum from "./sum"
import add from "./add"
import { purchase } from "./time"
import {afterEach, beforeEach, describe, expect, it, vi} from "vitest"

describe.skip("#sum", () => {
    it("returns 0 with no numbers", () => {
        expect(sum()).toBe(0)
    })

    it("returns same number with one number", () => {
        expect(sum(2)).toBe(2)
    })

    it("returns sum with multiple numbers", () => {
        expect(sum(1,2,3)).toBe(6)
    })
})

describe.skip("#add", () => {
    it("Addition works fine", () => {
        const result = add(2,5)
        expect(result).toBe(7)
    })

})

describe ('purchase', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('allows purchases within business hours', () =>{
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)
        expect(purchase()).toEqual({message: 'Success'})
    })

    it('allows purchases within business hours', () =>{
        const date = new Date(2000, 1, 1, 19)
        vi.setSystemTime(date)
        expect(purchase()).toEqual({message: 'Error'})
    })
})