## get tag action 

* 将 `refs/tags/v1.2.0` 
* ===> v1.2.0 (vtag) 
* ===> 1.2.0 (tag)                    

## Inputs

### `get-tag-action`

* tag_name : 必填

## Outputs

### `tag`

例如：1.2.0

### `vtag`

例如：v1.2.0

## Example usage
```
on:
  push:
    # 发布tags 触发
    tags:
      - 'v*'
jobs:
  release:
    runs-on: ubuntu-latest
    steps:

    - name: Get Tag Action
      id: get_tag_action
      uses: fengzhongyun1992/get-tag-action@v1
      with:
        tag_name: ${{ github.ref }}

    - name: Create Release
        id: create_release

        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

        with:
          tag_name: ${{ github.ref }}
          release_name: app ${{ github.ref }}
          body: |
            app.  ${{ steps.get_tag_action.outputs.vtag }}发布
          draft: false
          prerelease: false
```
