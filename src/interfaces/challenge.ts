export interface Challenge {
    id: string,
    data: {
        title: string,
        shortDesc: string,
        description: string,
        hints: string[],
        tags: string[],
        difficulty: string,
        solutionAttributes: {
            expectedType: string,
            expectedField: string,
            expectedValue: any,
        }
    }
}