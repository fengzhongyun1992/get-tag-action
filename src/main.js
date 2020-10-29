const core = require('@actions/core')

try {
    // example: refs/tags/v1.2.0
    const tagName  = core.getInput('tag_name',{required: true});
    // 1.2.0
    const tag = tagName.replace("refs/tags/v",'');
    // v1.2.0
    const vtag = tagName.replace("refs/tags/",'');

    core.setOutput('tag',tag);
    core.setOutput('vtag',vtag);

} catch (e) {
    core.setFailed(e.message)
}