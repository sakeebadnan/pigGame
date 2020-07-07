const assert = require("chai").assert;
const { validSet, validSetReset, invalidDataLeftPlayer } = require("./provider");

describe("Automated UI testing of Pig Game", async () => {
  let page;

  before(async () => {
    page = await browser.newPage();
    await page.goto(
    //  `file:///home/albert/Documents/School/Testing/FINAL_PROJECT/Tasks/7.Unit Testing/Code/pigGame/index.html`
      `file:C://Users//Bruger//Desktop//Exam_project_testing//7.Unit Testing//Code//pigGame//index.html`
      
    );
    await page.setViewport({ width: 1920, height: 1040 });
  });

  after(async function () {
    await page.close();
  });

  describe("Validate player profile fields with data", async () => {
    validSet.forEach(async (element) => {
      it("should fill the input fields with data on player 1 and save it", async () => {
        const usernameInput = "#player-1-username";
        const ageInput = "#player-1-age";
        const emailInput = "#player-1-email";
        const experienceInput = "#player-1-experience";
        const saveButton = "#save-player-one";
      
        linkUsername = await page.$(usernameInput);
        await linkUsername.click({ clickCount: 3 });
        await linkUsername.type(element.username);
        assert.equal(!!linkUsername, true);
    
        linkAge = await page.$(ageInput);
        await linkAge.click({ clickCount: 3 });
        await linkAge.type(element.age);
        assert.equal(!!linkAge, true);

        linkEmail = await page.$(emailInput);
        await linkEmail.click({ clickCount: 3 });
        await linkEmail.type(element.email);
        assert.equal(!!linkEmail, true);

        linkExp = await page.$(experienceInput);
        await linkExp.click({ clickCount: 3 });
        await linkExp.type(element.experience);
        assert.equal(!!linkExp, true);

        linkSaveButton = await page.$(saveButton);
        await linkSaveButton.click({ clickCount: 3 });
        assert.equal(!!linkSaveButton, true);
      });

      it("should fill the input fields with data on player 2 and save it", async () => {
        const usernameInput = "#player-2-username";
        const ageInput = "#player-2-age";
        const emailInput = "#player-2-email";
        const experienceInput = "#player-2-experience";
        const saveButton = "#save-player-two";
  
        linkUsername = await page.$(usernameInput);
        await linkUsername.click({ clickCount: 3 });
        await linkUsername.type(element.username);
        assert.equal(!!linkUsername, true);
  
        linkAge = await page.$(ageInput);
        await linkAge.click({ clickCount: 3 });
        await linkAge.type(element.age);
        assert.equal(!!linkAge, true);
  
        linkEmail = await page.$(emailInput);
        await linkEmail.click({ clickCount: 3 });
        await linkEmail.type(element.email);
        assert.equal(!!linkEmail, true);
  
        linkExp = await page.$(experienceInput);
        await linkExp.click({ clickCount: 3 });
        await linkExp.type(element.experience);
        assert.equal(!!linkExp, true);
  
        linkSaveButton = await page.$(saveButton);
        await linkSaveButton.click({ clickCount: 3 });
        assert.equal(!!linkSaveButton, true);
      });
    });
  });

  describe("Play game, test buttons and fill input fields", async () => {
    it("should fill the final score input", async () => {
      const finalScoreInput = ".final-score";
      linkFinalScore = await page.$(finalScoreInput);
      await linkFinalScore.click({ clickCount: 1 });
      await linkFinalScore.type("120");
      assert.equal(!!linkFinalScore, true);
    });

    it("should roll the dice 1 time for player 1", async () => {
      const rollButton = ".btn-roll";
      linkRollButton = await page.$(rollButton);
      await linkRollButton.click({ clickCount: 1 });
      assert.equal(!!linkRollButton, true);
      await page.waitFor(500);
    });
    it("should hold the turn for player 1", async () => {
      const holdButton = ".btn-hold";
      linkHoldButton = await page.$(holdButton);
      await linkHoldButton.click({ clickCount: 1 });
      assert.equal(!!linkHoldButton, true);
      await page.waitFor(500);
    });
    it("should roll the dice 2 times for player 2", async () => {
      const rollButton = ".btn-roll";
      linkRollButton = await page.$(rollButton);
      await linkRollButton.click({ clickCount: 2 });
      assert.equal(!!linkRollButton, true);
      await page.waitFor(500);
    });
    it("should hold the turn for player 2", async () => {
      const holdButton = ".btn-hold";
      linkHoldButton = await page.$(holdButton);
      await linkHoldButton.click({ clickCount: 1 });
      assert.equal(!!linkHoldButton, true);
      await page.waitFor(500);
    });
  });

  describe("Reset game", async () => {
    it("should reset the game for both players", async () => {
      const newButton = ".btn-new";
      linkNewButton = await page.$(newButton);
      await linkNewButton.click({ clickCount: 1 });
      assert.equal(!!linkNewButton, true);
      await page.waitFor(500);
    });
  });

  describe("Reset and change player fields", async () => {
      it("should reset and change both players", async () => {
        const changeUsersButton = ".btn-changeUsers";
        linkChangeUsersButton = await page.$(changeUsersButton);
        await linkChangeUsersButton.click({ clickCount: 1 });
        assert.equal(!!linkChangeUsersButton, true);
        await page.waitFor(500);
      });
      validSetReset.forEach(async (element) => {
        it("should refill the input fields with data on player 1 and save it", async () => {
          const usernameInput = "#player-1-username";
          const ageInput = "#player-1-age";
          const emailInput = "#player-1-email";
          const experienceInput = "#player-1-experience";
          const saveButton = "#save-player-one";

          linkUsername = await page.$(usernameInput);
          await linkUsername.click({ clickCount: 3 });
          await linkUsername.type(element.username);
          assert.equal(!!linkUsername, true);

          linkAge = await page.$(ageInput);
          await linkAge.click({ clickCount: 3 });
          await linkAge.type(element.age);
          assert.equal(!!linkAge, true);

          linkEmail = await page.$(emailInput);
          await linkEmail.click({ clickCount: 3 });
          await linkEmail.type(element.email);
          assert.equal(!!linkEmail, true);

          linkExp = await page.$(experienceInput);
          await linkExp.click({ clickCount: 3 });
          await linkExp.type(element.experience);
          assert.equal(!!linkExp, true);

          linkSaveButton = await page.$(saveButton);
          await linkSaveButton.click({ clickCount: 3 });
          assert.equal(!!linkSaveButton, true);
        });

        it("should refill the input fields with data on player 2 and save it", async () => {
          const usernameInput = "#player-2-username";
          const ageInput = "#player-2-age";
          const emailInput = "#player-2-email";
          const experienceInput = "#player-2-experience";
          const saveButton = "#save-player-two";

          linkUsername = await page.$(usernameInput);
          await linkUsername.click({ clickCount: 3 });
          await linkUsername.type(element.username);
          assert.equal(!!linkUsername, true);

          linkAge = await page.$(ageInput);
          await linkAge.click({ clickCount: 3 });
          await linkAge.type(element.age);
          assert.equal(!!linkAge, true);

          linkEmail = await page.$(emailInput);
          await linkEmail.click({ clickCount: 3 });
          await linkEmail.type(element.email);
          assert.equal(!!linkEmail, true);

          linkExp = await page.$(experienceInput);
          await linkExp.click({ clickCount: 3 });
          await linkExp.type(element.experience);
          assert.equal(!!linkExp, true);

          linkSaveButton = await page.$(saveButton);
          await linkSaveButton.click({ clickCount: 3 });
          assert.equal(!!linkSaveButton, true);
        });
    });
  });
  
  describe("Reset game", async () => {
    it("should reset the game for both players", async () => {
      const newButton = ".btn-new";
      linkNewButton = await page.$(newButton);
      await linkNewButton.click({ clickCount: 1 });
      assert.equal(!!linkNewButton, true);
      await page.waitFor(500);
    });
  });

  describe("Play another round, after game reset", async () => {
    it("should fill the final score input", async () => {
      const finalScoreInput = ".final-score";
      linkFinalScore = await page.$(finalScoreInput);
      await linkFinalScore.click({ clickCount: 3 });
      await linkFinalScore.type("90");
      assert.equal(!!linkFinalScore, true);
    });

    it("should roll the dice 1 time for player 1", async () => {
      const rollButton = ".btn-roll";
      linkRollButton = await page.$(rollButton);
      await linkRollButton.click({ clickCount: 1 });
      assert.equal(!!linkRollButton, true);
      await page.waitFor(500);
    });
    it("should hold the turn for player 1", async () => {
      const holdButton = ".btn-hold";
      linkHoldButton = await page.$(holdButton);
      await linkHoldButton.click({ clickCount: 1 });
      assert.equal(!!linkHoldButton, true);
      await page.waitFor(500);
    });
    it("should roll the dice 2 times for player 2", async () => {
      const rollButton = ".btn-roll";
      linkRollButton = await page.$(rollButton);
      await linkRollButton.click({ clickCount: 2 });
      assert.equal(!!linkRollButton, true);
      await page.waitFor(500);
    });
    it("should hold the turn for player 2", async () => {
      const holdButton = ".btn-hold";
      linkHoldButton = await page.$(holdButton);
      await linkHoldButton.click({ clickCount: 1 });
      assert.equal(!!linkHoldButton, true);
      await page.waitFor(500);
    });
  });

  describe("Test invalid data in player forms", async () => {

    invalidDataLeftPlayer.forEach(async(element, index)=>{
      it(`Checks data for invalid case number ${index}`, async () => {
        const newButton = ".btn-new";
        linkNewButton = await page.$(newButton);
        await linkNewButton.click({ clickCount: 1 });
        assert.equal(!!linkNewButton, true);
        await page.waitFor(500);

        const usernameInput = "#player-1-username";
        const ageInput = "#player-1-age";
        const emailInput = "#player-1-email";
        const experienceInput = "#player-1-experience";
        const saveButton = "#save-player-one";
      
        linkUsername = await page.$(usernameInput);
        await linkUsername.click({ clickCount: 3 });
        await linkUsername.type(element.username);
        assert.equal(!!linkUsername, true);
    
        linkAge = await page.$(ageInput);
        await linkAge.click({ clickCount: 3 });
        await linkAge.type(element.age);
        assert.equal(!!linkAge, true);

        linkEmail = await page.$(emailInput);
        await linkEmail.click({ clickCount: 3 });
        await linkEmail.type(element.email);
        assert.equal(!!linkEmail, true);

        linkExp = await page.$(experienceInput);
        await linkExp.click({ clickCount: 3 });
        await linkExp.type(element.experience);
        assert.equal(!!linkExp, true);

        linkSaveButton = await page.$(saveButton);
        await linkSaveButton.click({ clickCount: 3 });
        assert.equal(!!linkSaveButton, true);
      });

      it(`Checks data for invalid case number ${index}`, async () => {
        const newButton = ".btn-new";
        linkNewButton = await page.$(newButton);
        await linkNewButton.click({ clickCount: 1 });
        assert.equal(!!linkNewButton, true);
        await page.waitFor(500);

        const usernameInput = "#player-2-username";
        const ageInput = "#player-2-age";
        const emailInput = "#player-2-email";
        const experienceInput = "#player-2-experience";
        const saveButton = "#save-player-two";
      
        linkUsername = await page.$(usernameInput);
        await linkUsername.click({ clickCount: 3 });
        await linkUsername.type(element.username);
        assert.equal(!!linkUsername, true);
    
        linkAge = await page.$(ageInput);
        await linkAge.click({ clickCount: 3 });
        await linkAge.type(element.age);
        assert.equal(!!linkAge, true);

        linkEmail = await page.$(emailInput);
        await linkEmail.click({ clickCount: 3 });
        await linkEmail.type(element.email);
        assert.equal(!!linkEmail, true);

        linkExp = await page.$(experienceInput);
        await linkExp.click({ clickCount: 3 });
        await linkExp.type(element.experience);
        assert.equal(!!linkExp, true);

        linkSaveButton = await page.$(saveButton);
        await linkSaveButton.click({ clickCount: 3 });
        assert.equal(!!linkSaveButton, true);
      });
    });
  });
});
