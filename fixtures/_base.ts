import { test as base } from '@playwright/test'
import { PageObjects } from "./_pages"
import { pages } from "./_pages";

export const test = base.extend<PageObjects>({
    ...pages
})

export { expect } from '@playwright/test'