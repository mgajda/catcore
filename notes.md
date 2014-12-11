# Enabling CatCore #

1. `npm i spark-cli`
2. (spark config) - configs are stored, and also put into `~/exp/catcore/config.sh`
    * `source ~/exp/catcore/config.sh`
3. `spark flash catcore tinker`
4. `spark function list`
...
Should show 4 different functions:
    * analogwrite,
    * analogread,
    * digitalwrite,
    * digitalread.
5. `spark login` succeeded
Now this works:
```
spark function call catcore analogread D7
```
6. Now can try with `johnny-five` robotics:
    * `npm i johnny-five`
    * Still didn't get motor.js script to work, even
