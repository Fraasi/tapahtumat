###!/bin/sh

# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.

# Allows us to read user input below, assigns stdin to keyboard
exec < /dev/tty

read -p "Did you remember to run build script? (y/n)" ANSWER
case ${ANSWER:0:1} in
    y|Y )
        echo Continuing git push; exit 0
    ;;
    * )
        echo Canceled git push; exit 1
    ;;
esac
