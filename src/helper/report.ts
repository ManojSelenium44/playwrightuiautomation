import { Formatter, IFormatterOptions } from '@cucumber/cucumber';
import { generate } from 'cucumber-html-reporter';

export class CustomFormatter extends Formatter {
    constructor(options: IFormatterOptions) {
        super(options);
        options.eventBroadcaster.on('test-run-finished', async () => {
            generate({
                theme: 'bootstrap',
                jsonFile: 'test-results/reports/cucumber_report.json',
                output: 'test-results/reports/cucumber_report.html',
                reportSuiteAsScenarios: true,
                launchReport: true,
            });
        });
    }
}
