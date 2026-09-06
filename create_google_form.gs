/**
 * SDLCFactory.com + .ai — Google Form Auto-Creator
 * 
 * INSTRUCTIONS:
 * 1. Open https://script.google.com/ in your browser.
 * 2. Click "+ New project".
 * 3. Replace all code in Code.gs with this script.
 * 4. Click "Run" at the top. Grant permissions when prompted.
 * 5. Check the Execution log below for your live Shareable Link and Embed HTML!
 */

function createSDLCFactoryForm() {
  // Create Form
  var form = FormApp.create('SDLCFactory.com + .ai — Make an Offer');
  
  // Settings & Confirmation Message
  form.setDescription('Submit your offer for the SDLCFactory.com + SDLCFactory.ai domain bundle.');
  form.setConfirmationMessage("Thanks — I'll reach out on your preferred channel within 24 hours.");
  form.setCollectEmail(false);
  
  // 1. Full Name — short answer, required
  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  // 2. Email Address — short answer, required, email validation
  var emailItem = form.addTextItem()
    .setTitle('Email Address')
    .setRequired(true);
  var emailValidation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText('Please enter a valid email address.')
    .build();
  emailItem.setValidation(emailValidation);

  // 3. Phone Number — short answer, required
  form.addTextItem()
    .setTitle('Phone Number')
    .setRequired(true);

  // 4. Country — short answer, required
  form.addTextItem()
    .setTitle('Country')
    .setRequired(true);

  // 5. Preferred messaging channel — multiple choice, required
  form.addMultipleChoiceItem()
    .setTitle('Preferred messaging channel')
    .setChoiceValues(['WhatsApp', 'Telegram', 'Signal', 'WeChat', 'iMessage', 'Other'])
    .setRequired(true);

  // 6. Your ID/handle on that channel — short answer, required
  form.addTextItem()
    .setTitle('Your ID/handle on that channel')
    .setHelpText('e.g. your WhatsApp number, Telegram @username, etc.')
    .setRequired(true);

  // 7. Your offer amount (USD) — short answer, required, number validation
  var offerItem = form.addTextItem()
    .setTitle('Your offer amount (USD)')
    .setHelpText('Offer is for both domains together.')
    .setRequired(true);
  var offerValidation = FormApp.createTextValidation()
    .requireNumberGreaterThan(0)
    .setHelpText('Please enter a valid dollar amount.')
    .build();
  offerItem.setValidation(offerValidation);

  // 8. Intended use for the domains — paragraph, optional
  form.addParagraphTextItem()
    .setTitle('Intended use for the domains')
    .setRequired(false);

  // Generate Links
  var publishedUrl = form.getPublishedUrl();
  var embedUrl = form.getEditUrl().replace('/edit', '/viewform?embedded=true');
  var iframeSnippet = '<iframe src="' + embedUrl + '" width="640" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';

  Logger.log('====================================================');
  Logger.log('GOOGLE FORM CREATED SUCCESSFULLY!');
  Logger.log('1. Live Shareable Link: ' + publishedUrl);
  Logger.log('2. Embed URL: ' + embedUrl);
  Logger.log('3. Embed HTML: ' + iframeSnippet);
  Logger.log('====================================================');
}
