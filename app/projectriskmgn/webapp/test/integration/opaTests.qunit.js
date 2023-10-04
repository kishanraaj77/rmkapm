sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'projectriskmgn/test/integration/FirstJourney',
		'projectriskmgn/test/integration/pages/RisksList',
		'projectriskmgn/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('projectriskmgn') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);